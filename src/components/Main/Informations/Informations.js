import React from 'react';
import './Informations.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { geckoInfo } from '../../utils/Data';
import { motion } from 'framer-motion';

const Informations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="informations">
      <h2>OBECNE PROMOCJE</h2>
      <figure className="info-img-box">
        <img
          src="https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_120329-1684.jpg?t=st=1709283280~exp=1709286880~hmac=25fd20bd7db9ef6582012b20fda690364109076f4905c8b37d3deb6112d3c1b4&w=996"
          alt="Ise of Pins"
          title="logo"
        />
        </figure>
      <div className="info-accordion">
        {geckoInfo.map((item) => (
          <Accordion>
            <AccordionSummary
              key={item.id}
              className="acc-summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="acc-details">
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </motion.div>
  );
};

export default Informations;
