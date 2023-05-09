export interface Library {
  language: string;
  repository_url: string;
  description: string;
  license: string;
  created_at: string;
  features: LibraryFeature[];
  tags: LibraryTag[];
  urls: Record<string, string>;
}

export type LibraryTag =
  | "archived"
  | "fork"
  | "wrapper";

export type LibraryFeature =
  | "gateway"
  | "interactions"
  | "oauth2"
  | "rest"
  | "rpc"
  | "voice"
  | "webhooks";

export interface Language {
  url: string;
  libraries: string[];
}
