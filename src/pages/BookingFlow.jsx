// 4-step booking flow page — manages step state and shared booking data
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Stepper from "../components/booking/Stepper";
import Step1Goal from "../components/booking/Step1Goal";
import Step2Mentor from "../components/booking/Step2Mentor";
import Step3Slot from "../components/booking/Step3Slot";
import Step4Checkout from "../components/booking/Step4Checkout";
import PaymentScreen from "../components/payment/PaymentScreen";
import PaymentFailedScreen from "../components/payment/PaymentFailedScreen";

export default function BookingFlow({ initialMentor, setView, onConfirm }) {
  const [step, setStep] = useState(initialMentor ? 3 : 1);
  const [goal, setGoal] = useState("");
  const [selectedMentor, setSelectedMentor] = useState(initialMentor || null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [bookingForm, setBookingForm] = useState(null);

  const handlePay = (form) => {
    setBookingForm(form);
    setShowPayment(true);
    setPaymentFailed(false);
  };

  const handlePaySuccess = () => {
    setShowPayment(false);
    onConfirm({ mentor: selectedMentor, selectedDay, selectedTime, bookingForm });
  };

  const handlePayFail = () => {
    setShowPayment(false);
    setPaymentFailed(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 mesh-bg">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => step > 1 ? setStep(step - 1) : setView("mentors")}
          className="flex items-center gap-1.5 text-sm mb-6 hover:text-indigo-400 transition-colors"
          style={{ color: "var(--fg-muted)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          {step > 1 ? "Previous step" : "Back to mentors"}
        </button>

        <Stepper currentStep={step} />

        <div className="glass-card rounded-2xl p-6 sm:p-8">
          {step === 1 && (
            <Step1Goal
              goal={goal}
              setGoal={setGoal}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <Step2Mentor
              goal={goal}
              selectedMentor={selectedMentor}
              setSelectedMentor={setSelectedMentor}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <Step3Slot
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              onNext={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          )}
          {step === 4 && (
            <Step4Checkout
              mentor={selectedMentor}
              selectedDay={selectedDay}
              selectedTime={selectedTime}
              onPay={handlePay}
              onBack={() => setStep(3)}
            />
          )}
        </div>
      </div>

      {showPayment && (
        <PaymentScreen
          mentor={selectedMentor}
          totalAmount={selectedMentor?.price}
          onSuccess={handlePaySuccess}
          onFail={handlePayFail}
        />
      )}

      {paymentFailed && (
        <PaymentFailedScreen
          onRetry={() => { setPaymentFailed(false); setShowPayment(true); }}
          onCancel={() => { setPaymentFailed(false); setView("landing"); }}
        />
      )}
    </div>
  );
}
