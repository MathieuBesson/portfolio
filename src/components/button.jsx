export const Button = ({ label, link, type }) => {
    return <a href={link}><button class={`btn-effect btn-${type}`}>{label}</button></a>
}