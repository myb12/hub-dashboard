import { Box, ListItemText } from "@mui/material";
import SmallBox from "../Components/Shared/ConveyorCard/SmallBox";
import { AiFillCloseSquare, AiFillCheckSquare } from "react-icons/ai";

export const draggableLayoutData = {
  column1: {
    id: "column1",
    rows: [{ id: "row1" }],
  },
  column2: {
    id: "column2",
    rows: [{ id: "row2-1" }, { id: "row2-2" }, { id: "row2-3" }],
  },
  column3: {
    id: "column3",
    rows: [
      { id: "row3-1", draggable: false },
      {
        columns: [{ id: "col3-2-1" }, { id: "col3-2-2" }],
      },
    ],
  },
  column4: {
    id: "column4",
    rows: [{ id: "row4-1" }, { id: "row4-2" }, { id: "row4-3" }],
  },
};

// pie chart data
export const pieChart = {
  data: {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  },

  option: {
    title: {
      display: true,
      text: "Custom Pie Chart",
      fontSize: 20,
    },
  },
};

// bar chart data
export const barChart = {
  data: {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
    datasets: [
      {
        label: "Data",
        data: [10, 20, 30, 40],
        backgroundColor: ["red", "green", "blue", "orange"],
      },
    ],
  },

  option: {
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
  },
};

export const conveyorData = [
  {
    title: "Mode:",
    desc: () => (
      <ListItemText
        primary="Auto"
        sx={{ color: "#1D7A32", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Status:",
    desc: () => (
      <ListItemText
        primary="Waiting"
        sx={{ color: "#FF7639", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Task Type:",
    desc: () => (
      <ListItemText
        primary="Idle"
        sx={{ color: "#125598", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Why Not Working:",
    desc: () => "",
  },
  {
    title: "Start Condition:",
    desc: () => "",
  },
  {
    title: "Pallet Sensors:",
    desc: () => (
      <Box sx={{ display: "flex" }}>
        <SmallBox text="LO" />
        <SmallBox text="LO" rounded={true} />
        <SmallBox text="RO" rounded={true} />
        <SmallBox text="RO" />
        <SmallBox text="RI" />
      </Box>
    ),
  },
  {
    title: "Job Status:",
    desc: () => (
      <ListItemText
        primary="Unknown"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Active Shelf:",
    desc: () => (
      <ListItemText
        primary="0"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "PLC Pallet Exists",
    desc: () => <SmallBox text="P" />,
  },

  {
    title: "Front Lock Status:",
    desc: () => "",
  },
];

export const carrierPropsData = [
  {
    title: "Mode:",
    desc: () => (
      <ListItemText
        primary="Auto"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Status:",
    desc: () => (
      <ListItemText
        primary="Idle"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },

  {
    title: "Steps:",
    desc: () => (
      <ListItemText
        primary="Not Running"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Job No:",
    desc: () => (
      <ListItemText
        primary="96"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Position:",
    desc: () => (
      <ListItemText
        primary="Completed"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Target:",
    desc: () => (
      <ListItemText
        primary="0mm I 83230"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Position ID:",
    desc: () => (
      <ListItemText
        primary="01"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Speed:",
    desc: () => (
      <ListItemText
        primary="0 rpm I 0 m/s"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
];

export const palleteData = [
  {
    title: "Plate No:",
    desc: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          svg: {
            fontSize: "24px",
            ml: 1,
          },
        }}
      >
        <ListItemText
          primary="GJZ-0196"
          sx={{
            marginRight: "32px",
            color: "#838296",
            span: { fontSize: "14px" },
          }}
        />
        <AiFillCheckSquare style={{ color: "#61BD63" }} />{" "}
        <AiFillCloseSquare style={{ color: "#DC3545" }} />
      </Box>
    ),
  },
  {
    title: "Ticket No:",
    desc: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          svg: {
            fontSize: "24px",
            ml: 1,
          },
        }}
      >
        <ListItemText
          primary="TKT-0569"
          sx={{
            marginRight: "32px",
            color: "#838296",
            span: { fontSize: "14px" },
          }}
        />
        <AiFillCheckSquare style={{ color: "#00000033" }} />{" "}
        <AiFillCloseSquare style={{ color: "#DC3545" }} />
      </Box>
    ),
  },
  {
    title: "CH Cat:",
    desc: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          svg: {
            fontSize: "24px",
            ml: 1,
          },
        }}
      >
        <ListItemText
          primary="Sedan"
          sx={{
            marginRight: "32px",
            color: "#838296",
            span: { fontSize: "14px" },
          }}
        />
        <AiFillCheckSquare style={{ color: "#00000033" }} />{" "}
        <AiFillCloseSquare style={{ color: "#DC3545" }} />
      </Box>
    ),
  },
  {
    title: "Car Weight:",
    desc: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          svg: {
            fontSize: "24px",
            ml: 1,
          },
        }}
      >
        <ListItemText
          primary="16"
          sx={{
            marginRight: "32px",
            color: "#838296",
            span: { fontSize: "14px" },
          }}
        />
        <AiFillCheckSquare style={{ color: "#00000033" }} />{" "}
        <AiFillCloseSquare style={{ color: "#DC3545" }} />
      </Box>
    ),
  },
  {
    title: "Entrance Time:",
    desc: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          svg: {
            fontSize: "24px",
            ml: 1,
          },
        }}
      >
        <AiFillCheckSquare style={{ color: "#00000033" }} />{" "}
        <AiFillCloseSquare style={{ color: "#DC3545" }} />
      </Box>
    ),
  },
  {
    title: "Request Time:",
    desc: () => "",
  },
  {
    title: "Shelf Base ID:",
    desc: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          svg: {
            fontSize: "24px",
            ml: 1,
          },
        }}
      >
        <ListItemText
          primary="523"
          sx={{
            marginRight: "32px",
            color: "#838296",
            span: { fontSize: "14px" },
          }}
        />
        <AiFillCheckSquare style={{ color: "#00000033" }} />{" "}
        <AiFillCloseSquare style={{ color: "#DC3545" }} />
      </Box>
    ),
  },
];
