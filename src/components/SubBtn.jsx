import React from "react";
import { useNavigation } from "react-router-dom";

const SubBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <section>
      <button className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="loading loading-spinner"></span>
            sending...
          </>
        ) : (
          text
        )}
      </button>
    </section>
  );
};

export default SubBtn;
