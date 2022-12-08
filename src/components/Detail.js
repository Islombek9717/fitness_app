import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import BodyPart from "./BodyPart";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;


  const extraDetail = [
    {
        icon: BodyPartImage,
        name:bodyPart, 
    },
    {
        icon: TargetImage,
        name:target, 
    },
    {
        icon: EquipmentImage,
        name:equipment, 
    },
  ]

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
    
    <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant="h3">
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span>
        </Typography>
        <Typography variant="h6">
        Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span>  is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
            <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                    <img  src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }}  />
                </Button>
                <Typography variant="h5" textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                    {item.name}
                </Typography>
            </Stack>
        ))}
    </Stack>
    </Stack>
  );
};

export default Detail;
