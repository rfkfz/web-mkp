// LocationMap.tsx
import React from 'react';

const LocationMap = () => {
    return (
        <div className="w-full h-96">
            <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.73997606195667!2d107.02185865491623!3d-6.274274549235608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e1309690c43%3A0x60617218d6d3e4ed!2sJl.%20H.%20Jampang%2C%20Jatimulya%2C%20Kec.%20Tambun%20Sel.%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017510!5e0!3m2!1sen!2sid!4v1693915642451!5m2!1sen!2sid"
                title="Google Maps Location"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
            ></iframe>
        </div>
    );
};

export default LocationMap;
