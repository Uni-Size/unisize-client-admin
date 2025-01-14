interface ButtonProp {
  children: React.ReactNode;
}
export default function Button({ children }: ButtonProp) {
  return <button type="button">{children}</button>;
}
