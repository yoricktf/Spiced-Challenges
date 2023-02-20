import { Fragment, useState } from "react";
import { useImmer } from 'use-immer'
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";


const finishLine = 200;

export default function CarRace() {
  // const [cars, setCars] = useState(initialCars);
  const [cars, updateCars] = useImmer(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();

    updateCars(draft => {
      // const foundCar = draft.find((car) => car.emoji === clickedCar.emoji)
      const foundCarIndex = draft.findIndex((car) => car.emoji === clickedCar.emoji)
      const drivingCar = draft[foundCarIndex]

      drivingCar.position.x = drivingCar.position.x + coveredDistance
      drivingCar.position.lastDistance = coveredDistance
    })

    // console.log("clickedCar", clickedCar);
    // console.log("coveredDistance", coveredDistance);

    // setCars(prevCars => {
    //   return prevCars.map(car => {
    //     if (car.emoji === clickedCar.emoji) {
    //       return {
    //         ...car,
    //         position: { x: car.position.x + coveredDistance, lastDistance: coveredDistance }
    //       }
    //     }
    //     return { ...car }
    //   }
    //   )
    // })
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => setCars(initialCars)} />
      ) : (
        <AllCarRoutes finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track finishLine={finishLine}>
                <CarButton
                  onClick={() => moveCar(car)}
                  positionX={car.position.x}
                  lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
