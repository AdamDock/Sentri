
const HomeContent = () => {
    return (
        <div style={{
            backgroundImage: `url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
            <div className="flex flex-row text-center justify-center items-center mr-10 ml-10 ">
                <div>
                    <img src={process.env.PUBLIC_URL + '/SentriBlue-Photoroom.png'}
                    className="static z-50"
                    width="800"
                    height="800"
                    />
                   

                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white wrap">
                        House out of order? Don't have time to maintain the margins? Let us help! Sentri Home services is an all inclusive solution to home maintenance in the fast pace modern lifestyle. 
                    </h1>
                </div>
                </div>
                <div>
                <div className="ml-10">
                    <h3 className="text-2xl font-extrabold text-sentriBlue items-start">Labors we can wash your hands of: </h3>
                    <ul className="list-disc list-inside text-xl mt-5 text-white font-bold">
                        <li>Yard work</li>
                        <li>House cleaning</li>
                        <li>Laundry</li>
                        <li>Carpet cleaning</li>
                        <li>Window washing</li>
                        <li>And much more!</li>
                </ul>

                </div>
       
            </div>           
        </div>
    );
    }
export default HomeContent;