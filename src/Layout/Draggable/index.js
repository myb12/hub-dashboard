import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import Card1 from "../../Components/Shared/ConveyorCard";
import PieChart from "../../Components/Shared/PieChart";
import BarChart from "../../Components/BarChart";

const Draggable = () => {
  const [layout, setLayout] = useState([]);

  // Handler function for when an element is dragged and its position changes
  const onDragStop = (layout) => {
    setLayout(layout);
  };

  const gridItems = [
    { key: "1", x: 0, y: 0, w: 1, h: 1, isDraggable: true },
    { key: "2", x: 1, y: 0, w: 1, h: 2, isDraggable: true },
    { key: "3", x: 2, y: 0, w: 3, h: 2, isDraggable: false },
    { key: "4", x: 5, y: 0, w: 1, h: 2, isDraggable: true },
  ];

  const nestedGridItems = [
    { key: "1", x: 0, y: 0, w: 1, h: 2 },
    { key: "2", x: 1, y: 0, w: 1, h: 2 },
  ];

  const gridItemsRight = [
    { key: "1", x: 0, y: 0, w: 1, h: 1, isDraggable: true },
    { key: "2", x: 0, y: 1, w: 1, h: 1, isDraggable: true },
    { key: "3", x: 0, y: 2, w: 1, h: 1, isDraggable: true },
  ];

  const GridRight = () => {
    const [layout, setLayout] = useState([]);

    // Handler function for when an element is dragged and its position changes
    const onDragStop = (layout, oldItem, newItem) => {
      setLayout((prevLayout) => {
        const updatedLayout = [...prevLayout];
        const itemIndex = updatedLayout.findIndex(
          (item) => item.i === newItem.i
        );
        if (itemIndex !== -1) {
          updatedLayout[itemIndex] = newItem;
        }
        return updatedLayout;
      });
    };

    return (
      <RenderGrid
        layout={layout}
        cols={1}
        rowHeight={300}
        width={window.innerWidth / 6}
        onDragStop={onDragStop}
      >
        {gridItemsRight.map((item) => (
          <div
            key={item.key}
            className="grid-item"
            data-grid={item}
            draggable={item.isDraggable}
            onDragStop={(e, { node, x, y }) => {
              const updatedLayout = layout.map((layoutItem) => {
                if (layoutItem.i === item.key) {
                  return { ...layoutItem, x };
                }
                return layoutItem;
              });
              setLayout(updatedLayout);
            }}
          >
            <Card1
              renderChart={() => (
                <PieChart data={chartData} options={chartOptions} />
              )}
              test={item.key}
            />
          </div>
        ))}
      </RenderGrid>
    );
  };

  // pie chart data
  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  };

  const chartOptions = {
    // Add your custom options here
    // For example, to add a title:
    title: {
      display: true,
      text: "Custom Pie Chart",
      fontSize: 20,
    },
  };

  // bar chart data
  const barChartData = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
    datasets: [
      {
        label: "Data",
        data: [10, 20, 30, 40],
        backgroundColor: ["red", "green", "blue", "orange"],
      },
    ],
  };

  const barChartOptions = {
    // Add your custom options here
    // For example, to add a title:
    title: {
      display: true,
      text: "Custom Bar Chart",
      fontSize: 20,
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
      },
    },
  };

  const RenderGrid = ({
    children,
    layout,
    cols,
    rowHeight,
    width,
    onDragStop,
  }) => {
    return (
      <div style={{ width: "100%" }}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={cols}
          rowHeight={rowHeight}
          width={width}
          onDragStop={onDragStop}
        >
          {children}
        </GridLayout>
      </div>
    );
  };

  const NestedGrid = () => {
    const [layout, setLayout] = useState([]);

    // Handler function for when an element is dragged and its position changes
    const onDragStop = (layout) => {
      setLayout(layout);
    };

    return (
      <RenderGrid
        layout={layout}
        cols={2}
        rowHeight={100}
        width={(window.innerWidth / 6) * 3 - 32}
        onDragStop={onDragStop}
      >
        {/* Render your grid items */}
        {nestedGridItems.map((item) => (
          <div key={item.key} className="grid-item" data-grid={item}>
            {item.key === "1" && (
              <PieChart data={chartData} options={chartOptions} />
            )}
            {item.key === "2" && (
              <BarChart data={barChartData} options={barChartOptions} />
            )}
          </div>
        ))}
      </RenderGrid>
    );
  };

  return (
    <RenderGrid
      layout={layout}
      cols={6}
      rowHeight={100}
      width={window.innerWidth - 32}
      onDragStop={onDragStop}
    >
      {/* Render your grid items */}
      {gridItems.map((item) => (
        <div
          key={item.key}
          className="grid-item"
          data-grid={item}
          draggable={item.isDraggable}
        >
          {item.key === "3" ? (
            <div>
              <div style={{ backgroundColor: "tomato", height: 450 }}>
                Panel 3D
              </div>
              <NestedGrid />
            </div>
          ) : item.key === "2" ? (
            <div>
              <Card1 />
              <Card1
                renderChart={() => (
                  <PieChart data={chartData} options={chartOptions} />
                )}
              />
            </div>
          ) : item.key === "4" ? (
            <GridRight />
          ) : (
            <Card1 />
          )}
        </div>
      ))}
    </RenderGrid>
  );
};

export default Draggable;
