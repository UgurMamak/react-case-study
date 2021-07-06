import {getDateNow} from "./helpers/getDate";
import renderer from 'react-test-renderer';
import PrimaryCard from "./components/PrimaryCard";
import React from "react";

test("getdate test",()=>{
    const data = '7.2.2021 17:50:23';
    const result = '7.2.2021 17:50:23';
    console.log(data);
    expect(getDateNow(data)).toEqual(result);
});

describe('App', () => {
    test('snapshot renders', () => {
        const item={
            updated:getDateNow(new Date()),
            created:getDateNow(new Date()),
            points:6,
            key:1,
        }
        const component = renderer.create(<PrimaryCard
            increasePoints={''}
            decreasePoints={''}
            receivedData={''}
            deleteCardConfirm={''}
            item={item} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});