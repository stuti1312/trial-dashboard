import "./Main.css";
import img3 from "../IMAGES/download.jpg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <div>
      <main>
        <div className="main__container">
          <div className="main__title">
            <img src={img3} alt="image3" />
            <div className="main__greeting">
              <h1>hello codersbite</h1>
              <p>welocme to your admin dasgboard</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <i className="fa fa-user-o fa-2x text-lightblue"></i>
              <div className="card__inner">
                <p className="text-primary-p">number of subscribers</p>
                <span className="font-bold text-title">578</span>
              </div>
            </div>

            <div className="card">
              <i className="fa fa-calendar fa-2x text-red"></i>
              <div className="card-inner">
                <p className="text-primary-p">times of watcing</p>
                <span className="font-bold text-title">2467</span>
              </div>
            </div>

            <div className="card">
              <i className="fa fa-video-camera fa-2x text-yellow"></i>
              <div className="card__inner">
                <p className="text-primary-p">number of videos</p>
                <span className="font-bold text-title">340</span>
              </div>
            </div>

            <div className="card">
              <i className="fa fa-thumbs-up fa-2x text-green"></i>
              <div className="card__inner">
                <p className="text-primary-p">number of likes</p>
                <span className="font-bold text-title">645</span>
              </div>
            </div>
          </div>

          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>daily reports</h1>
                  <p>cupertino, california, usa</p>
                </div>
                <i className="fa fa-usd"></i>
              </div>
              <Chart />
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>stats report</h1>
                  <p>cupertino, california, usa</p>
                </div>
                <i className="fa fa-use"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>income</h1>
                  <p>$75,300</p>
                </div>

                <div className="card1">
                  <h1>sales</h1>
                  <p>$75,300</p>
                </div>

                <div className="card1">
                  <h1>users</h1>
                  <p>$75,300</p>
                </div>

                <div className="card1">
                  <h1>orders</h1>
                  <p>$75,300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
