// import homeimg from '../../assets/home-img.png';
// import './Home.css';

// const Home = () => (
//     <div className='app__header app__wrapper section_padding' id='home'>
//         <div className="app__wrapper_info">
//             <p className='p__opensans' style={{ margin: '2rem 0', color: 'white' }}> Cyber security Solutions for</p>
//             <h1 className='app__header_h1'>Organizations with Critical Infrastructure</h1>
//             <p className='p__opensans' style={{ margin: '2rem 0', color: 'white' }}>Sit tellus lobortis sed senectus vivamus molestie.
//                 Condimentum valupat morbi facilisis quam scelersique sapien.Et,penatibus akiquam amet telius</p>
//             <button type='button' className='custom__button'>Discover more</button>
//         </div>
//         <div className="app__wrapper_img">
//             <img src={homeimg} alt="header img" />
//         </div>
//     </div>
// );

// export default Home;

import homeimg from '../../assets/home-img.png';
import './Home.css';

const Home = () => (
    <div className='app__header app__wrapper section_padding' id='home'>
        <div className="app__wrapper_info">
            <p className='p__poppins' style={{ margin: '2rem 0', color: 'white' }}> Cyber security Solutions for</p>
            <h1 className='app__header_h1'>Organizations with Critical Infrastructure</h1>
            <p className='p__poppins' style={{ margin: '2rem 0', color: 'white' }}>Sit tellus lobortis sed senectus vivamus molestie.
                Condimentum valupat morbi facilisis quam scelersique sapien.Et,penatibus akiquam amet telius</p>
            <button type='button' className='custom__button'>Discover more</button>
        </div>
        <div className="app__wrapper_img">
            <img src={homeimg} alt="header img" />
        </div>
    </div>
);

export default Home;

