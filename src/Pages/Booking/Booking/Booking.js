import { useParams } from 'react-router';

const Booking = () => {

    const { serviceId } = useParams();
    
    return (
      <div className="text-center p-5 m-5">
        <h2>This is Booking {serviceId}</h2>
      </div>
    );
};

export default Booking;