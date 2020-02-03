import React, { memo } from "react";
import {
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch
} from "@chakra-ui/core";
import FormControl from "../../controls/FormControl";
import { useForm } from "../../../../hooks/useForm";
import ColorsControl from "../../controls/ColorsControl";
import usePropsSelector from "../../../../hooks/usePropsSelector";

const CircularProgressPanel = () => {
  const { setValueFromEvent, setValue } = useForm();

  const size = usePropsSelector("size");
  const thickness = usePropsSelector("thickness");
  const isIndeterminate = usePropsSelector("isIndeterminate");

  return (
    <>
      <FormControl label="Value">
        <Slider
          onChange={value => setValue("value", value)}
          min={0}
          max={100}
          step={1}
          defaultValue={100}
        >
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb />
        </Slider>
      </FormControl>

      <FormControl label="Size">
        <Input
          size="sm"
          value={size || "50px"}
          type="text"
          name="size"
          onChange={setValueFromEvent}
        />
      </FormControl>

      <FormControl label="Thickness">
        <Slider
          onChange={value => setValue("thickness", value)}
          min={0.1}
          max={1}
          step={0.1}
          defaultValue={thickness}
        >
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb />
        </Slider>
      </FormControl>

      <ColorsControl label="Color" name="color" />

      <FormControl label="Loading" htmlFor="isIndeterminate">
        <Switch
          name="isIndeterminate"
          id="isIndeterminate"
          size="sm"
          isChecked={isIndeterminate || false}
          onChange={() => setValue("isIndeterminate", !isIndeterminate)}
        />
      </FormControl>
    </>
  );
};

export default memo(CircularProgressPanel);