import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-4 mb-3 ' src={logo} alt="" />
            <p className='text-xl font-bold'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY, h:mm a")}</p>
        </div>
    );
};

export default Header;