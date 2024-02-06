

const AboutContent = () => {
    return (
        <div className="">
            <div className="flex items-center justify-center">
            <div className=" w-1/2 m-10 p-3">
                <h1 className="text-center m-1 text-2xl font-bold text-sentriBlue">
                    About us
                </h1>
                <h3 className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Viverra nam libero justo laoreet sit. Pharetra et ultrices neque ornare. Id leo in vitae turpis massa sed elementum tempus. Viverra adipiscing at in tellus integer. Turpis tincidunt id aliquet risus feugiat. Adipiscing tristique risus nec feugiat in fermentum. Sit amet cursus sit amet dictum sit amet. Nulla posuere sollicitudin aliquam ultrices sagittis.

Sit amet purus gravida quis blandit turpis. In iaculis nunc sed augue lacus viverra vitae congue eu. Fermentum leo vel orci porta non pulvinar. Adipiscing elit duis tristique sollicitudin. Urna duis convallis convallis tellus id interdum velit laoreet id. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Eget nunc scelerisque viverra mauris. Ac placerat vestibulum lectus mauris ultrices eros in. Urna et pharetra pharetra massa massa.
                </h3>
            </div>
            <div>
            <img src={process.env.PUBLIC_URL + '/Service.png'}
            className="static z-50 m-10"
            width="500"
            height="500"
            />
            </div>
            
        </div>
        <div className="flex items-center justify-center">
        <div className="w-1/2 m-10 p-3">
        <h1 className="text-center m-1 text-2xl font-bold text-sentriBlue">
                    What is our drive?
                </h1>
                <h3 className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Viverra nam libero justo laoreet sit. Pharetra et ultrices neque ornare. Id leo in vitae turpis massa sed elementum tempus. Viverra adipiscing at in tellus integer. Turpis tincidunt id aliquet risus feugiat. Adipiscing tristique risus nec feugiat in fermentum. Sit amet cursus sit amet dictum sit amet. Nulla posuere sollicitudin aliquam ultrices sagittis.

Sit amet purus gravida quis blandit turpis. In iaculis nunc sed augue lacus viverra vitae congue eu. Fermentum leo vel orci porta non pulvinar. Adipiscing elit duis tristique sollicitudin. Urna duis convallis convallis tellus id interdum velit laoreet id. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Eget nunc scelerisque viverra mauris. Ac placerat vestibulum lectus mauris ultrices eros in. Urna et pharetra pharetra massa massa.
                </h3>

            </div>
            
            <div>
            <img src={process.env.PUBLIC_URL + '/homeprotection.png'}
            className="static z-50 m-10"
            width="500"
            height="500"
            />
            </div>

           
            
            
        </div>
    </div>

    );
    }

export default AboutContent;