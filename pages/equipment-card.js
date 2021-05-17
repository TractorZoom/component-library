import EquipmentCard from '../packages/equipment-card/src/index';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

const AG_TRAILERS = {
    auctionDate: '2020-04-09T18:00:00.000Z',
    auctionLatitude: 48.2691655,
    auctionLongitude: -99.1901343,
    auctionType: 'Retirement',
    auctioneer: "Pifer's Auction & Realty",
    auctioneerAddress: '1506 29th Ave. South',
    auctioneerCity: 'Moorhead',
    auctioneerDescription: 'Dose Head Hunter Arrow Transport, SN: HH82917, 42 ft.',
    auctioneerState: 'MN',
    auctioneerUrl: 'www.pifers.com',
    auctioneerZip: 56560,
    category: 'Ag Trailers',
    city: '',
    id: 322127,
    imageUrl: 'https://tz-prod.s3.amazonaws.com/images/lots/2glVNG1569873790Archive.zip/12_5.jpg',
    latitude: 48.2691655,
    length: 42,
    longitude: -99.1901343,
    make: 'John Deere',
    makeImageUrl: 'https://tz-prod.s3.amazonaws.com/images/make/john-deere.png',
    makeName: 115,
    model: 'Undetermined',
    modelId: 28310,
    price: 6200,
    serial: 'HH82917',
    state: 'ND',
    subcategory: 'Header Trailers',
    zip: '58325',
};
const CHEMICAL_APPLICATORS = {
    auctionDate: '2019-07-09T16:00:00.000Z',
    auctionLatitude: 41.467229,
    auctionLongitude: -96.500511,
    auctionType: 'Liquidation',
    auctioneer: 'DPA Auctions',
    auctioneerAddress: '419 W. Judy Drive',
    auctioneerCity: 'Fremont',
    auctioneerDescription:
        'Hagie 280 Sprayer (KMK892), Hagie 280 Sprayer (KMK892), Cummins diesel engine, 6 Cyl., hydrostatic transmission, air conditioning, two (2) - 400 gallon poly tanks, 60\' boom, three (3) section folding boom, foam markers, 20" nozzle spacing, Raven sprayer control, EZ-Steer and globe, 12.4-28 tires.',
    auctioneerState: 'NE',
    auctioneerUrl: 'https://www.DPAauctions.com/',
    auctioneerZip: 68025,
    category: 'Chemical Applicators',
    city: 'Odebolt',
    gallon: 400,
    id: 255063,
    imageUrl: 'https://tz-prod.s3.amazonaws.com/images/lots/2uP1TA1561992907Archive-2.zip/74_1.jpg',
    latitude: 42.3329915,
    longitude: -95.2475518,
    make: 'Hagie',
    makeImageUrl: 'https://tz-prod.s3.amazonaws.com/images/make/Hagie.jpg',
    makeName: 263,
    model: '280',
    modelId: 25715,
    price: 6100,
    state: 'IA',
    subcategory: 'Sprayers - Self Propelled',
    widthFeet: 60,
    widthInches: null,
    year: 0,
    zip: '51458',
};
const HARVESTING = {
    auctionDate: '2021-01-30T15:00:00.000Z',
    auctionLatitude: 39.4698342,
    auctionLongitude: -92.0562374,
    auctionType: 'Consignment',
    auctioneer: 'Wheeler Auctions',
    auctioneerAddress: '23101 Highway 24',
    auctioneerCity: 'Paris',
    auctioneerDescription:
        "John Deere S780 Combine, 2018 4WD, Pro Drive Trans, 5 Speed Feeder House, Combine Advisor, CM w/ Fore/Aft Tilt, XTD Wear, Power Cast Tail Board, Power Fold Hopper, 650/85R38 Front Duals, 28.5' Unload Auger, 1019/550 Hours, Extende Powertrain Warranty until June 22 or 2,000 Hours SN 1H0S780SEJ0800388",
    auctioneerState: 'MO',
    auctioneerUrl: 'http://wheelerauctions.com/main/default.asp',
    auctioneerZip: 65275,
    category: 'Harvesting',
    city: 'Paris',
    drive: '4WD',
    hours: 1019,
    id: 661217,
    imageUrl: 'https://tz-prod.s3.amazonaws.com/images/lots/f61667fa-ef74-4553-963c-4bbb1a042e0d-0',
    latitude: 39.4698342,
    longitude: -92.0562374,
    make: 'John Deere',
    makeImageUrl: 'https://tz-prod.s3.amazonaws.com/images/make/john-deere.png',
    makeName: 115,
    model: 'S780',
    modelId: 29837,
    price: 282000,
    separatorHours: 550,
    serial: '1H0S780SEJ0800388',
    state: 'MO',
    subcategory: 'Combines',
    year: 2018,
    zip: '65275',
};
const PLANTER = {
    auctionDate: '2020-03-16T18:00:00.000Z',
    auctionLatitude: 40.9674271,
    auctionLongitude: -91.5188138,
    auctionType: 'Consignment',
    auctioneer: 'Steffes Group Inc.',
    auctioneerAddress: '2245 East Bluegrass',
    auctioneerCity: 'Mt. Pleasant',
    auctioneerDescription:
        'bulk fill planter, 36x30", draw bar, wing fold, 40 PTO pump, hyd drive, pneumatic down pressure, floating openers, Yetter trash wheels, row shut offs, bulk fill, markers, Pro 600 monitor, S/N YAS009111 (NEW, NEVER SOLD) West Point Implement, Inc., Chad Eisenmenger, 402.372.2408, 2074 S. Hwy 275, West Point, NE 68788',
    auctioneerState: 'IA',
    auctioneerUrl: 'https://steffesgroup.com/Home/Auctions',
    auctioneerZip: 52641,
    category: 'Planting',
    city: 'West Point',
    id: 548835,
    imageUrl: 'https://tz-prod.s3.amazonaws.com/images/lots/aa77c7f6-c044-4752-96eb-10959fd332a9-0',
    latitude: 41.8416659,
    longitude: -96.7086432,
    make: 'Case IH',
    makeImageUrl: 'images/make/case-ih.png',
    makeName: 44,
    model: '1260',
    modelId: 142787,
    numberOfRows: 36,
    price: 93000,
    rearPTO: '-1',
    serial: 'YAS009111',
    spacing: 30,
    state: 'NE',
    subcategory: 'Planters',
    year: 2010,
};
const TRACTOR = {
    auctionDate: '2021-04-03T14:00:00.000Z',
    auctionLatitude: 42.1050619,
    auctionLongitude: -83.678856,
    auctionType: 'Consignment',
    auctioneer: 'Rollo Juckette and Brad Neuhart Auctioneers',
    auctioneerAddress: '12544 Carpenter Rd.',
    auctioneerCity: 'Milan',
    auctioneerDescription:
        '127-1 - 1968 John Deere 4020 D 127-1 - 1968 John Deere 4020 D - Good running tractor, Syncro, WF, JD Toplink, Rear Remote, New Batteries 11/20. Fender radio does not work. This item is located in Belleville, MI - Viewing is available by appointment only. Contact the auction company to schedule an appointment.',
    auctioneerState: 'MI',
    auctioneerUrl: 'www.rolloandbrad.com',
    auctioneerZip: 48160,
    category: 'Tractors',
    city: 'Milan',
    drive: '2WD',
    horsepower: 101,
    hours: 5693,
    id: 688496,
    imageUrl: 'https://tz-prod.s3.amazonaws.com/images/lots/7809298c-1e7f-4f98-a547-d5a4930ef55c-0',
    latitude: 42.0853204,
    longitude: -83.6824384,
    make: 'John Deere',
    makeImageUrl: 'https://tz-prod.s3.amazonaws.com/images/make/john-deere.png',
    makeName: 115,
    model: '4020',
    modelId: 4742,
    price: 8750,
    rearPTO: '1',
    serial: '177264R',
    state: 'MI',
    subcategory: '100 to 174 HP',
    year: 1968,
    zip: '63556',
};
const LIST_OF_EQUIPMENT = [AG_TRAILERS, CHEMICAL_APPLICATORS, HARVESTING, PLANTER, TRACTOR];

const EquipmentCardExamples = () => {
    const [selectedEquipmentSet, setSelectedEquipmentSet] = useState(new Set());
    const handleEquipmentSelected = (equipment) => () => {
        const newSelected = new Set(selectedEquipmentSet);

        if (newSelected.has(equipment.id)) {
            newSelected.delete(equipment.id);

            setSelectedEquipmentSet(newSelected);
        } else {
            newSelected.add(equipment.id);

            setSelectedEquipmentSet(newSelected);
        }
    };
    const handleOpen = (equipment) => () => {
        alert(`${equipment.make} ${equipment.model} Card Clicked`);
    };

    return (
        <div
            style={{
                margin: '40px auto',
                maxWidth: 800,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                @tractorzoom/equipment-card
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {LIST_OF_EQUIPMENT.map((equipment) => (
                    <EquipmentCard
                        handleEquipmentSelected={handleEquipmentSelected(equipment)}
                        handleOpen={handleOpen(equipment)}
                        key={equipment.id}
                        selectedEquipmentSet={selectedEquipmentSet}
                        style={{ margin: 5, maxWidth: 300 }}
                        {...equipment}
                    />
                ))}
            </div>
        </div>
    );
};

export default EquipmentCardExamples;
