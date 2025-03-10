import RechartsAndCalendar from "../../../components/Dashboard/AdminHome/AllStatistics/RechartsAndCalendar";
import UserCount from "../../../components/Dashboard/AdminHome/AllStatistics/UserCount";


const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto">
            <UserCount/>
            <RechartsAndCalendar/>
        </div>
    );
};

export default Dashboard;