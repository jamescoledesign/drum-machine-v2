import '../styles/pads.css';
import Logo from '../images/WPD001-Logo_WPD001-Logo-Light.svg'
import Pad from './Pad';

function AllPads() {
  return (
    <section id="pads" className="pads">
      <Pad 
        id="pad1" 
        title="Title" 
        keyAssignment="Key 1"
        sound="0"
        />
    </section>
  );
}

export default AllPads;
