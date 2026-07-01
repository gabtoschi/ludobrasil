import type { SectionHeaderProps } from "./SectionHeader.props";

export default function SectionHeader(props: SectionHeaderProps) {
  if (props.size === 'large') {
    return <header className="mb-5">
      <h1>{props.before}<b className="text-success">{props.focus}</b>{props.after}</h1>
      <h5 className="fst-italic">{props.subtitle}</h5>
    </header>
  }

  return <header className="mb-4">
    <h3>{props.before}<b className="text-success">{props.focus}</b>{props.after}</h3>
    <h5 className="fst-italic">{props.subtitle}</h5>
  </header>
}