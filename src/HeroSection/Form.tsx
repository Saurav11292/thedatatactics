import React from 'react';
import { Formik, Form, Field } from 'formik';

const Basic: React.FC = () => (
  <div>
    
    <Formik
      initialValues={{ name: '', workmail: '', requirement: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Form submitted:', values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h1 className=" text-gray-400">Access high-quality store location datasets</h1>
          <div>
            <Field type="text" name="name" className="mt-4 w-full p-2 rounded-lg text-gray-400 border-1 border-gray-500" placeholder="Name"/>
          </div>
          <div>
            <Field type="email" name="workmail" className="mt-4 w-full p-2 rounded-lg text-gray-400 border-1 border-gray-500" placeholder="Work Email"/>
          </div>
          <div>
            <Field as="textarea" name="requirement" className="mt-4 w-full p-2 rounded-lg text-gray-400 border-1 border-gray-500" placeholder="Your Requirement(Optional)"/>
          </div>
          <button type="submit" disabled={isSubmitting} className="p-2 mt-4 w-full bg-blue-400 hover:bg-blue-700 rounded-lg">
            Request data sample
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
