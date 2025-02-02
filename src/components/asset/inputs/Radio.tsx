import style from "./inputs.module.scss";

interface RadioProp {
  title: string;
  value: string | number;
  name?: string;
}
export default function Radio({ title, value, name }: RadioProp) {
  return (
    <label className={style.radio_container}>
      <input type="radio" value={value} name={name} />
      {title}
    </label>
  );
}
