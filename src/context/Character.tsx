import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { api } from "../services/api";
import { ICharacter } from "../interfaces/character";
import { isAxiosError } from "axios";

interface ICharacterContextData {
  character: ICharacter;
  characters: ICharacter[];
  totalPages: number;
  currentPage: number;
  searchName: string;
  loading: boolean;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  handlePageChange: (page: number) => void;
  handleSearchNameChange: () => void;
  setCharacter: React.Dispatch<React.SetStateAction<ICharacter>>;
}

const CharacterContext = createContext<ICharacterContextData>(
  {} as ICharacterContextData
);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [character, setCharacter] = useState<ICharacter>({} as ICharacter);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);
  const resultsPerPage = 10;
  const hasFetched = useRef(false);
  const controllerRef = useRef<AbortController | null>(null);

  //Keep data stored
  const cache = useRef<{
    [key: string]: { results: ICharacter[]; total: number };
  }>({});

  const handleListData = async (page = 1) => {
    const cacheKey = `${searchName}-${page}`;

    //Check if already have data
    if (cache.current[cacheKey]) {
      setCharacters(cache.current[cacheKey].results);
      setTotalPages(Math.ceil(cache.current[cacheKey].total / resultsPerPage));
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      setLoading(true);
      const res = await api.get("/characters", {
        params: {
          nameStartsWith: searchName === "" ? null : searchName,
          limit: resultsPerPage,
          offset: (page - 1) * resultsPerPage,
          apikey: "06909ef0c4881444b17a26b4d6326902",
          hash: "69b9b206213e0de4ed860f527e285417",
          ts: "1",
        },
        signal: controller.signal,
      });

      const { results, total } = res.data.data;

      // Store data in cache
      cache.current[cacheKey] = { results, total };

      setTotalPages(Math.ceil(total / resultsPerPage));
      setCharacters(results);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error) && error.code !== "ERR_CANCELED") {
        console.error("Erro ao buscar personagens:", error);
      }
    }
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber === currentPage) return;
    setCurrentPage(pageNumber);
    handleListData(pageNumber);
  };

  const handleSearchNameChange = () => {
    setCurrentPage(1);
    handleListData(1);
  };

  useEffect(() => {
    if (!hasFetched.current) {
      handleListData();
      hasFetched.current = true;
    }
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        character,
        characters,
        totalPages,
        currentPage,
        searchName,
        loading,
        setSearchName,
        handlePageChange,
        handleSearchNameChange,
        setCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacters must be used within a CharacterProvider");
  }
  return context;
};
