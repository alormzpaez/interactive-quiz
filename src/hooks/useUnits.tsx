import { useEffect, useState } from "react"
import { UnitsContentsData, unitData } from "../data";
import { UnitDataToShow } from "../interfaces";


export const useUnits = () => {
  const [units, setUnits] = useState<UnitDataToShow[]>([]);
  const handleGetUnitsToShow = () => {

    const dataUnits = unitData.map(unit => {
        return {
          id: unit.id,
          name: unit.name,
          description: unit.description,
          topics: UnitsContentsData.filter(units => units.unit_id === unit.id)
          .map(unitContent => {
            return {
              topic: unitContent.topic,
              methods: [...unitContent.methods]
            }
          })
        }
    });

    setUnits(dataUnits);
  }
  useEffect(() => {
    handleGetUnitsToShow();
  },[])

  return {
    units
  }
}
