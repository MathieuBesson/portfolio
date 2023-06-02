import avatar from './../../../assets/images/avatar.svg';

export const LogoPresentation = () => {
    return <div class="logo-presentation">
        <img class="logo-presentation-img" src={avatar} alt="Avatar Mathieu Besson" />
        <h1 class="logo-presentation-title">Mathieu Besson</h1>
    </div>
}