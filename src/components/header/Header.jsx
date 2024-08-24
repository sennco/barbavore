import perfil from '../../assets/perfil.jpeg';


const Header = () => {
  return (
    <header className="mt-20 items-center flex flex-col">
        <img
          className="w-36 h-fit rounded-full"
          src={perfil}
          alt="Foto de perfil de Barbavore"
        />
        <h1 className='font-sans text-smoke text-3xl font-medium mt-5' >Barbearia Barbavore</h1>
      </header>
  )
}

export default Header;
