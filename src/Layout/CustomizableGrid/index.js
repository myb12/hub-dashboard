import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import PieChart from "../../Components/Shared/PieChart";
import BarChart from "../../Components/BarChart";
import {
  barChart,
  carrierPropsData,
  draggableLayoutData,
  pieChart,
} from "../../data/fakeData";
import CustomCard from "../../Components/Shared/CustomCard";
import CardList from "../../Components/Shared/CustomCard/CardList";
import ConveyorCard from "../../Components/Shared/ConveyorCard";
import Commands from "../../Components/Shared/CustomCard/Commands";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;

  const { source, destination } = result;
  const sourceColumn = columns[source.droppableId];
  const destColumn = columns[destination.droppableId];
  const sourceRow = sourceColumn.rows.splice(source.index, 1)[0];

  if (source.droppableId === destination.droppableId) {
    sourceColumn.rows.splice(destination.index, 0, sourceRow);
  } else {
    destColumn.rows.splice(destination.index, 0, sourceRow);
  }

  setColumns({
    ...columns,
    [sourceColumn.id]: sourceColumn,
    [destColumn.id]: destColumn,
  });
};

const renderCards = (position) => {
  switch (position) {
    case "row1":
      return <ConveyorCard text="Conveyor Id - 01" />;

    case "row2-3":
      return (
        <CustomCard text="System Occupancy">
          <PieChart data={pieChart.data} options={pieChart.option} />
        </CustomCard>
      );
    case "col3-2-2":
      return (
        <CustomCard text="Fill Rate of Systems">
          <BarChart data={barChart.data} options={barChart.option} />
        </CustomCard>
      );
    case "row2-1":
      return (
        <CustomCard text="Carrier Props">
          <CardList data={carrierPropsData} />
        </CustomCard>
      );
    case "row2-2":
      return (
        <CustomCard text="Carrier Props">
          <Commands />
        </CustomCard>
      );

    case "row3-1":
      return (
        <div style={{ backgroundColor: "tomato", height: 450 }}>Panel 3D</div>
      );

    default:
      return position;
  }
};

function Customizable() {
  const [columns, setColumns] = useState(draggableLayoutData);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <div style={{ display: "flex" }}>
        {Object.values(columns).map((column) => (
          <Droppable droppableId={column.id} key={column.id}>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  flex: column.id === "column3" ? 3 : 1,
                  padding: 4,
                  minHeight: 200,
                }}
              >
                {column.rows.map((row, rowIndex) => {
                  if (!row?.id) return null;

                  return (
                    <Draggable
                      draggableId={row.id}
                      index={rowIndex}
                      key={row.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            userSelect: "none",
                            padding: 4,
                            minHeight: "50px",
                            ...provided.draggableProps.style,
                          }}
                        >
                          {renderCards(row.id)}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {column.id === "column3" &&
                  column.rows.find((row) => row.columns) && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                      }}
                    >
                      {column.rows
                        .find((row) => row.columns)
                        .columns.map((col, colIndex) => (
                          <Draggable
                            draggableId={col.id}
                            index={colIndex}
                            key={col.id}
                          >
                            {(provided, snapshot) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  userSelect: "none",
                                  padding: "8px 0 ",
                                  margin: "0 4px",
                                  minHeight: "50px",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {renderCards(col.id)}
                              </div>
                            )}
                          </Draggable>
                        ))}
                    </div>
                  )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default Customizable;
