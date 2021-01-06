import * as React from 'react'
import { Form, InputNumber, Button, Select} from 'antd';
import getDatesInYearWhere from '../lib/utils/getDatesInYearWhere/getDatesInYearWhere'
import { IDatesInYearResponse, WeekDay } from '../@types/types'
import CalendarGroup from '../lib/components/CalendarGroup/CalendarGroup';
import { CURRENT_YEAR, locale, weekDays } from '../config/config';
import { validateDay, validateWeekDay } from '../lib/validators';

const { Option } = Select

interface DaysFinderProps {
    day: number
    weekDay: WeekDay
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


const DaysFinder: React.FC<DaysFinderProps> = (props: DaysFinderProps) => {
    const { day, weekDay } = props
    const [dates, setDates] = React.useState<IDatesInYearResponse>([])
    const [form] = Form.useForm();

    const updateDates = (year: string) => {
        const days = getDatesInYearWhere(year, { day, weekDay })
        setDates(days)
    }

    const onFinish = (values: { year: string }) => {
        form.validateFields(['day', 'weekDay']).then(values => {
          const { day, weekDay } = values
          validateDay(day, form)
          validateWeekDay(weekDay, form)
        })
        updateDates(values.year)
      };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    const renderForm = () => (
      <Form
      {...layout}
      data-testid="form"
      name="basic"
      form={form}
      initialValues={{ year: CURRENT_YEAR, day, weekDay }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Day"
        name="day"
      >
        <InputNumber disabled/>
      </Form.Item>
      <Form.Item
        label="Week day"
        name="weekDay"
        >
        <Select disabled>
            {weekDays.map(v => <Option key={v} value={v}>{v}</Option>)}
        </Select>
        </Form.Item>
      <Form.Item
        label="Year"
        name="year"
        rules={[{ required: true, message: 'Please input the year!'}]}
      >
        <InputNumber min={100}/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form.Item>
    </Form>
  )

  const renderCalendars = () => (
    <div className="calendars-container">
      <CalendarGroup dates={dates} locale={locale}/>
    </div>
  )

  return (
    <div className="page-container">
      {renderForm()}
      {renderCalendars()}
    </div> 
  )
}

export default DaysFinder
