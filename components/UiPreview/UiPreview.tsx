"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge/Badge";
import Button, { ButtonLink } from "@/components/ui/Button/Button";
import Checkbox from "@/components/ui/Checkbox/Checkbox";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Input from "@/components/ui/Input/Input";
import InstallCommand from "@/components/ui/InstallCommand/InstallCommand";
import Notice from "@/components/ui/Notice/Notice";
import Panel from "@/components/ui/Panel/Panel";
import RadioGroup from "@/components/ui/RadioGroup/RadioGroup";
import Select from "@/components/ui/Select/Select";
import Textarea from "@/components/ui/Textarea/Textarea";
import Toast from "@/components/ui/Toast/Toast";
import styles from "./UiPreview.module.scss";

const UiPreview = () => {
  const [values, setValues] = useState({ name: "", email: "", notes: "", contact: "email", plan: "free", agree: false });
  const [selected, setSelected] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const emailError = values.email && !values.email.includes("@") ? "Enter a valid email address." : undefined;

  return (
    <div className={styles.preview}>
      <header className={styles.intro}>
        <h1>UI components</h1>
        <p>Shared controls and panels from the site design. Try their states before building the examples.</p>
      </header>
      <Panel title="Buttons and badges">
        <div className={styles.stack}>
          <div className={styles.row}>
            <Button variant="primary">Primary</Button>
            <Button>Outline</Button>
            <Button variant="success">Apply</Button>
            <Button variant="ghost">Learn more →</Button>
            <Button disabled>Disabled</Button>
            <Button size="sm">Small</Button>
            <Button pill selected={selected} onClick={() => setSelected((current) => !current)}>Selectable</Button>
            <ButtonLink href="/">Back to home</ButtonLink>
            <Button onClick={() => setShowToast(true)}>Show notification</Button>
          </div>
          <div className={styles.row}>
            <Badge dot>React 18+</Badge>
            <Badge tone="accent">TypeScript</Badge>
            <Badge tone="success" dot>isValid: true</Badge>
            <Badge tone="error">isValid: false</Badge>
            <Badge tone="warning">Edit mode</Badge>
          </div>
        </div>
      </Panel>
      <div className={styles.grid}>
        <Panel title="Form controls">
          <div className={styles.stack}>
            <Input label="Name" name="name" autoComplete="name" value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} placeholder="Your name" required />
            <Input label="Email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} hint="Type a value without @ to see the error state." error={emailError} placeholder="you@example.com" />
            <Input label="Password" name="password" type="password" autoComplete="new-password" placeholder="At least 8 characters" />
            <Input label="Quantity" name="quantity" type="number" min={1} defaultValue={1} />
            <Input label="Delivery date" name="delivery-date" type="date" />
            <Input label="Disabled field" disabled value="Unavailable" />
            <Select label="Plan" name="plan" value={values.plan} onChange={(event) => setValues({ ...values, plan: event.target.value })}>
              <option value="free">Free</option>
              <option value="pro">Pro</option>
            </Select>
            <Textarea label="Notes" name="notes" value={values.notes} onChange={(event) => setValues({ ...values, notes: event.target.value })} placeholder="Additional details" />
            <Checkbox label="I agree to the terms" name="agree" checked={values.agree} onChange={(event) => setValues({ ...values, agree: event.target.checked })} required />
            <Checkbox label="Disabled checkbox" disabled />
            <RadioGroup label="Preferred contact" name="contact" value={values.contact} onChange={(event) => setValues({ ...values, contact: event.target.value })} options={[
              { value: "email", label: "Email" },
              { value: "phone", label: "Phone" },
              { value: "post", label: "Post", disabled: true },
            ]} />
          </div>
        </Panel>
        <div className={styles.stack}>
          <CodeBlock title="Control values" language="json" code={JSON.stringify(values, null, 2)} wrap />
          <Notice tone="info" title="UI preview">These controls use local React state. Package demos will be built separately.</Notice>
          <Notice tone="success" title="Success">Form values submitted.</Notice>
          <Notice tone="warning" title="Edit mode">Save becomes available after a value changes.</Notice>
          <Notice tone="error" title="Validation error">Check the highlighted fields.</Notice>
        </div>
      </div>
      <Panel title="Installation">
        <div className={styles.stack}>
          <InstallCommand command="npm install full-form-control" />
          <InstallCommand command="pnpm add full-form-control" />
          <InstallCommand command="yarn add full-form-control" />
        </div>
      </Panel>
      <CodeBlock title="Example.tsx" language="tsx" code={'import { useForm } from "full-form-control";\n\nconst Example = () => {\n  const { formValues } = useForm({ email: "" });\n  return <p>{formValues.email}</p>;\n};\n\nexport default Example;'} />
      {showToast && <Toast onClose={() => setShowToast(false)}>The notification is ready.</Toast>}
    </div>
  );
};

export default UiPreview;
