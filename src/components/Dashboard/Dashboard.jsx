import './Dashboard.css';
import BarChart from '../Charts/BarChart';

function Dashboard() {
    return (
        <section id="dashboard">
            <div id="box-dashboard">
                <div id="box-dashboard-title">
                    <h2>
                        <i className="fa-solid fa-house"></i>
                        Dashboard
                    </h2>
                </div>
                <div id="box-dashboard-content">
                    <div className='box-dashboard-content-chats'>
                        <div className='box-dashboard-content-chats-title'>
                            <h3>Chart</h3>
                        </div>
                        <div className='box-dashboard-content-chats-content'>
                            <div>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
