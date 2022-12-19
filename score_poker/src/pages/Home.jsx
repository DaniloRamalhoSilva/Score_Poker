import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { fetchFindOverallRating } from '../services/API';
import GrideRanke from '../components/GridRanke';
import Navigationbar from '../components/Navigationbar';

function Home() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [rank, setRank] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchFindOverallRating()
        .then((res) => {
          setRank(res.data);
        }).catch(({ response }) => {
          if (response.data.message === 'Expired or invalid token') setIsError(response.data);
          if (response.data.message === 'Token not found') navigate('/login');
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      {isError ? (
        <Alert variant="danger" onClose={() => navigate('/login')} dismissible>
          <Alert.Heading>{isError.message}</Alert.Heading>
        </Alert>
      ) : (
        rank.length !== 0 && (
        <div>
          <Navigationbar />
          <GrideRanke rank={rank} />
        </div>
        )
      )}
    </div>
  );
}

export default Home;
