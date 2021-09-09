import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { ChangeEvent } from "react";
import "./searchAndSelect.scss";

interface IProps {
  mode: string | null;
  handleSearchedValue: (inputName: string) => void;
  handleSelectValue: (selectedName: string) => void;
  onIconSearch: React.MouseEventHandler<HTMLButtonElement>;
  onFilterSelect: React.MouseEventHandler<HTMLButtonElement>;
  onEnterPressSearch: (
    event: React.KeyboardEventHandler<HTMLInputElement>
  ) => void; //keydown ucun type
}

const SearchAndSelect = (props: IProps) => {
  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    props.handleSearchedValue(event.target.value);
  };
  const onFilterSelected = (event: ChangeEvent<HTMLSelectElement>) => {
    props.handleSelectValue(event.target.value);
  };
  function handleChange(value: any) {
    if (`${value}` !== undefined) props.handleSelectValue(`${value}`);
  }
  const test = () => {
    console.log("TEST");
  };

  const enterPressed = (event: any) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      props.onEnterPressSearch(code);
    }
  };
  return (
    <div className="search_and_select">
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5 p-lg-0">
            <Input
              className={`search_by_name ${props.mode === "dark" ? "dark" : "light"}`}
              placeholder="Search for a country.."
              prefix={<SearchOutlined onClick={props.onIconSearch} />}
              onKeyDown={enterPressed}
              onChange={onChangeInputValue}
            />
          </div>
          <div className="col-12 col-lg-2 p-lg-0">
            <Select
              // allowClear
              className={`filter_by_region ${props.mode === "dark" ? "dark" : "light"}`}
              placeholder="Filter by the Region"
              // onChange={onFilterSelected}
              onChange={handleChange}
            >
              <Select.Option value="africa">Africa</Select.Option>
              <Select.Option value="americas">America</Select.Option>
              <Select.Option value="asia">Asia</Select.Option>
              <Select.Option value="europe">Europe</Select.Option>
              <Select.Option value="oceania">Oceania</Select.Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSelect;
