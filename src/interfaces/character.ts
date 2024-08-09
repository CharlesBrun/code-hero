interface Url {
  type: string;
  url: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Item {
  resourceURI: string;
  name: string;
}

interface Collection {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Collection;
  series: Collection;
  stories: Collection;
  events: Collection;
  urls: Url[];
}
