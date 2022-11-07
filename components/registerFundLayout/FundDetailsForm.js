import { useState, useEffect, useContext } from 'react';

import CustomInput from '../customInput/CustomInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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

  const { editFundData } = useContext(RegisterFundContext);

  const [formData, setFormData] = useState({
    fundName: '',
    category: '',
    description: '',
    targetAmount: '',
    deadline: ''
  })

  const handleChange = (e) => {

    // To allow only numbers as input. (Decimal allowed)
    const validAmount = new RegExp(/^\d*\.?\d*$/);

    if (!e.target.name === 'targetAmount') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
    validAmount.test(e.target.value) && setFormData({ ...formData, targetAmount: e.target.value })
  }

  useEffect(() => {
    editFundData.id && setFormData({
      fundName: editFundData.name ? editFundData.name : '',
      category: editFundData.category ? editFundData.category : '',
      description: editFundData.description ? editFundData.description : '',
      targetAmount: editFundData.targetAmount ? editFundData.targetAmount : '',
      deadline: editFundData.deadline ? editFundData.deadline : ''
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
      <div className={styles.fieldContainer}>
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
      </div>

      <CustomInput
        label={'Description'}
        placeholder="Enter description"
        name="description"
        rows="10"
        value={formData.description}
        onChange={handleChange}
      />

      <CustomInput
        label={'Target Amount'}
        placeholder="Enter amount"
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
      />

      <CustomInput
        label={'Deadline'}
        placeholder="Enter deadline"
        name="deadline"
        type={'date'}
        value={formData.deadline}
        onChange={handleChange}
      />
    </form>
  )
}

export default FundDetailsForm
