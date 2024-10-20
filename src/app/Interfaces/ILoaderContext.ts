export interface ILoaderContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  path: string | null;
  setPath: React.Dispatch<React.SetStateAction<string | null>>;
  handleNavigate: (newPath: string) => void;
}
