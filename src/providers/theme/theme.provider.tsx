import { PrimeReactProvider } from "primereact/api";

type Props = {
  children: JSX.Element;
};

export default function ThemeProvider({ children }: Props) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
