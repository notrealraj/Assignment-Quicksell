import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import { GET_TICKETS_URL } from './constants';
import { loadGrid, mapUsersByUserId } from './utils';
import { Ticket, User } from './interfaces';
import Loader from './components/Loader';
import './App.css';

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userData, setUserData] = useState<Record<string, User>>({});
  const [gridData, setGridData] = useState<Record<string, Ticket[]>>({});
  const [grouping, setGrouping] = useState<string>('status');
  const [ordering, setOrdering] = useState<string>('priority');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();

    fetch(GET_TICKETS_URL)
      .then((response) => response.json())
      .then((data) => {
        const { tickets, users } = data;
        setTickets(tickets);
        setUserData(mapUsersByUserId(users));
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, []);

  useEffect(() => {
    if (tickets.length) {
      setGridData(loadGrid(tickets, grouping, ordering));
      setLoading(false);
    }
  }, [tickets, grouping, ordering]);

  const onSetGrouping = useCallback((value: string) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);

  const onSetOrdering = useCallback((value: string) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((settings: Record<string, string>) => {
    Object.keys(settings).forEach((key) => {
      localStorage.setItem(key, settings[key]);
    });
  }, []);

  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem('grouping') || 'status');
    setOrdering(localStorage.getItem('ordering') || 'priority');
  }, []);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={onSetGrouping}
        ordering={ordering}
        setOrdering={onSetOrdering}
      />
      {loading ? <Loader /> : <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />}
    </div>
  );
};

export default App;
