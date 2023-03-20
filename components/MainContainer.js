import Footer from './Footer';
import NavBar from './Navbar';

export default function MainContainer(props) {
  return (
    <>
      <NavBar/>
      <div> {props.children} </div>
      <Footer/>
    </>
  )
}
