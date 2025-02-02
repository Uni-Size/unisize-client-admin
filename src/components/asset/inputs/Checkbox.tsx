import style from "./inputs.module.scss";

interface CheckboxProp {
  value: string | number;
  name?: string;
}
export default function Checkbox({ value, name }: CheckboxProp) {
  return (
    <label className={style.checkbox_container}>
      <input type="checkbox" value={value} name={name} />
      {value}
    </label>
  );
}
