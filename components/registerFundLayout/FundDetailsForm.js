import { useState, useEffect, useContext } from 'react';

import CustomInput from '../customInput/CustomInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import moment from 'moment'
import { RegisterFundContext } from '../../context/AllContext';

import { fundCategories } from '../../data/fundDetails';

import styles from './registerFundLayout.module.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FundDetailsForm = () => {

  const { setFormData, formData, editFundData } = useContext(RegisterFundContext);

  const handleChange = (e) => {
    // To allow only numbers as input. No decimal
    const validAmount = new RegExp(/^[0-9]*$/);

    if (e.target.name === 'target' || e.target.name === 'minContribution') {
      validAmount.test(e.target.value) && setFormData({ ...formData, [e.target.name]: e.target.value })
      return
    }

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    editFundData.fundId && setFormData({
      ...formData,
      fundName: editFundData.description ? editFundData.description : '',
      // category: editFundData.category ? editFundData.category : '',
      description: '',
      target: editFundData.target ? editFundData.target : '',
      minContribution: editFundData.minContribution ? editFundData.minContribution : '',
      deadline: editFundData.deadline ? moment.unix(editFundData.deadline).format("YYYY-MM-DDTHH:mm") : ''
    })
  }, [editFundData])

  return (
    <form className={styles.formContainer}>
      <CustomInput
        label={'Fund Name'}
        placeholder="Enter fund name"
        name="fundName"
        value={formData.fundName}
        onChange={handleChange}
      />

      {/* CATEGORY */}
      {/* <div className={styles.fieldContainer}>
        <InputLabel className={styles.label}>Category</InputLabel>
        <Select
          fullWidth
          displayEmpty
          className={styles.field}
          name={'category'}
          value={formData.category}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          placeholder="Category"
        >
          <MenuItem disabled value="">
            <p>Category</p>
          </MenuItem>
          {fundCategories.map((cat) => (
            <MenuItem
              key={cat.categoryId}
              value={cat.categoryName}
            // style={getStyles(name, personName, theme)}
            >
              {cat.categoryName}
            </MenuItem>
          ))}
        </Select>
      </div> */}

      <CustomInput
        label={'Description'}
        placeholder="Enter description"
        name="description"
        rows="10"
        value={formData.description}
        onChange={handleChange}
      />

      <CustomInput
        label={'Target Amount (Wei)'}
        placeholder="Enter amount"
        name="target"
        value={formData.target}
        onChange={handleChange}
      />

      <CustomInput
        label={'Minimum Contribution'}
        placeholder="Enter amount"
        name="minContribution"
        value={formData.minContribution}
        onChange={handleChange}
      />

      <CustomInput
        label={'Deadline'}
        placeholder="Enter deadline"
        name="deadline"
        type={'datetime-local'}
        value={formData.deadline}
        onChange={handleChange}
      />
      <p className={styles.message}>*Fill all the fields to proceed</p>
    </form>
  )
}

export default FundDetailsForm
