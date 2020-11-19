import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import AlertContext from '../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Wrapper
        key={alert.id}
        type={alert.type}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        {alert.msg}
      </Wrapper>
    ))
  );
};

const Wrapper = styled(motion.div)`
  padding: 0.6em 1em;
  width: 100%;
  background-color: ${(props) =>
    props.type === 'danger' ? '#e53e3e' : '#48bb78'};
  color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
`;

export default Alerts;
