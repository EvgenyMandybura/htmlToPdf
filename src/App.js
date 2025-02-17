import React from 'react';
import jsPDF from 'jspdf';
import 'tailwindcss/tailwind.css';
import MiskaImg from './assets/mishka.jpg'
import ReactDOMServer from "react-dom/server";

const MyComponent = () => (
    <div className="container mx-auto p-4" id="pdf-content">
        <h1 className="text-3xl font-bold mb-4">Title PDF</h1>
        <img
            src={MiskaImg}
            alt="Пример изображения"
            className="w-[200px] mb-4"
        />
        <p className="text-gray-600">Test test test test test test</p>

        <table className="w-full border-collapse border">
            <thead>
            <tr>
                <th className="border text-gray-800 p-2">Name</th>
                <th className="border text-gray-800 p-2">Age</th>
                <th className="border text-gray-800 p-2">City</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border text-gray-600 p-2">Bob</td>
                <td className="border text-gray-600 p-2">25</td>
                <td className="border text-gray-600 p-2">Dnipro</td>
            </tr>
            <tr>
                <td className="border text-gray-600 p-2">Mary</td>
                <td className="border text-gray-600 p-2">30</td>
                <td className="border text-gray-600 p-2">Lviv</td>
            </tr>
            <tr>
                <td className="border text-gray-600 p-2">Petro</td>
                <td className="border text-gray-600 p-2">40</td>
                <td className="border text-gray-600 p-2">Odessa</td>
            </tr>
            </tbody>
        </table>
    </div>
);

const App = () => {
    const exportPDF = () => {
        let element = (
            <MyComponent />
        );
        const doc = new jsPDF("p", "pt", "letter");
        doc.html(ReactDOMServer.renderToString(element), {
            callback: function (doc) {
                doc.save('sample.pdf');
            }
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <MyComponent />
            <button
                onClick={exportPDF}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Download PDF
            </button>
        </div>
    );
};

export default App;
