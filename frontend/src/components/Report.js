import React from 'react';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

const Report = ({ data }) => {

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text("Financial Report", 20, 10);
        doc.save("report.pdf");
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Report");
        XLSX.writeFile(wb, "report.xlsx");
    };

    return (
        <div>
            <button onClick={exportToPDF}>Export to PDF</button>
            <button onClick={exportToExcel}>Export to Excel</button>
        </div>
    );
};

export default Report;
