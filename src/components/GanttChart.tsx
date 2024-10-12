// Components
import {Chart} from "react-google-charts";

const GanttChart: React.FC = () => {
    // Defining columns
    const columns = [
        {type: "string", label: "Task ID"},
        {type: "string", label: "Task Name"},
        {type: "date", label: "Start Date"},
        {type: "date", label: "End Date"},
        {type: "number", label: "Duration"},
        {type: "number", label: "Percent Complete"},
        {type: "string", label: "Dependencies"},
    ];

    // Defining rows
    const rows = [
        ['Stage_1', 'Write Document on Requirements',
            new Date(2024, 9, 1), new Date(2024, 9, 6), null, 100, null],
        ['Stage_2', 'Determine Possible Features',
            new Date(2024, 9, 1), new Date(2024, 9, 3), null, 100, null],
        ['Stage_3', 'Finalize Required Features & Details',
            new Date(2024, 9, 3), new Date(2024, 9, 6), null, 100, null],
        ['Stage_5', 'Prototyping Features',
            new Date(2024, 9, 6), new Date(2024, 9, 25), null, 25, null],
        ['Stage_6', 'User Feedback & Revision',
            new Date(2024, 9, 25), new Date(2024, 9, 31), null, 0, null],
        ['Stage_7', 'Polished Features',
            new Date(2024, 10, 1), new Date(2024, 10, 20), null, 0, null],
        ['Stage_8', 'Final Revisions & Submission',
            new Date(2024, 10, 20), new Date(2024, 10, 29), null, 0, null],
    ];

    // Options
    const options = {
        height: 250,
        gantt: {
            trackHeight: 30,
            // Customize your date format or other options here
            defaultStartDate: new Date(2024, 9, 1), // Start of the date range
        }
    };

    // Construct the data
    const data = [columns, ...rows];

    return <Chart chartType="Gantt" width="100%" height="100%" data={data} options={options}/>
}

export default GanttChart;