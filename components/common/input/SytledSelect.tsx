import React, { useState } from "react";
import {
  styled,
  Select,
  SelectProps,
  FormControl,
  MenuItem,
  FormLabel,
  SelectChangeEvent,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { grey } from "@mui/material/colors";

const PreStyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: "9px",
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  color: "black",
}));

interface MenuItem {
  value: any;
  label: string;
}

const SytledSelect = (
  props: SelectProps & {
    selectItems?: Array<MenuItem>;
    setSelectItem?: Function;
  }
) => {
  const {
    label,
    selectItems,
    value: instanceValue,
    setSelectItem,
    ...rest
  } = props;

  const [value, setValue] = useState(instanceValue || "");
  const [instanceLabel, setInstanceLabel] = useState(
    selectItems?.find((item) => item.value === instanceValue)?.label || ""
  );

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value);
    setInstanceLabel(
      selectItems?.find((item) => item.value === event.target.value)?.label ||
        ""
    );
    if (typeof setSelectItem === "function") setSelectItem(event.target.value);
  };

  return (
    <FormControl>
      <StyledFormLabel>{label}</StyledFormLabel>
      <PreStyledSelect
        IconComponent={KeyboardArrowDownIcon}
        size="small"
        onChange={
          selectItems && selectItems.length > 0 ? handleChange : rest.onChange
        }
        value={value}
        renderValue={() => instanceLabel}
        MenuProps={{
          elevation: 0,
          MenuListProps: {
            sx: {
              border: `1px solid ${grey[400]}`,
              borderRadius: "15px",
              padding: "12px 0",
            },
          },
        }}
        {...rest}
      >
        {selectItems && selectItems.length > 0
          ? selectItems.map((item, index) => (
              <MenuItem
                key={index}
                value={item.value}
                sx={{
                  padding: 0,
                }}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    width: "9px",
                    backgroundColor: (theme) => theme.palette.primary.main,
                    visibility: item.value !== value ? "hidden" : "inherit",
                  }}
                />
                <Box
                  sx={{
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingRight: "16px",
                    display: "flex",
                  }}
                >
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText>{item.label}</ListItemText>
                </Box>
              </MenuItem>
            ))
          : rest.children}
      </PreStyledSelect>
    </FormControl>
  );
};

export default SytledSelect;
