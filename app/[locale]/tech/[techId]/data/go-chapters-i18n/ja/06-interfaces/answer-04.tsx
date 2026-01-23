import React from 'react';

interface Props {
  className?: string;
}

export default function 解答04({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 解答4</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "errors"
)

// PaymentMethod interface
type PaymentMethod interface {
    Pay(amount float64) error
    GetName() string
}

// CreditCard
type CreditCard struct {
    CardNumber string
    CVV        string
    Balance    float64
}

func (cc CreditCard) Pay(amount float64) error {
    if cc.Balance < amount {
        return errors.New("insufficient balance")
    }
    fmt.Printf("Paid %.2f via Credit Card (**** %s)\n", 
        amount, cc.CardNumber[len(cc.CardNumber)-4:])
    return nil
}

func (cc CreditCard) GetName() string {
    return "Credit Card"
}

// PayPal
type PayPal struct {
    Email   string
    Balance float64
}

func (pp PayPal) Pay(amount float64) error {
    if pp.Balance < amount {
        return errors.New("insufficient PayPal balance")
    }
    fmt.Printf("Paid %.2f via PayPal (%s)\n", amount, pp.Email)
    return nil
}

func (pp PayPal) GetName() string {
    return "PayPal"
}

// Alipay
type Alipay struct {
    UserID  string
    Balance float64
}

func (ap Alipay) Pay(amount float64) error {
    if ap.Balance < amount {
        return errors.New("insufficient Alipay balance")
    }
    fmt.Printf("Paid %.2f via Alipay (User: %s)\n", amount, ap.UserID)
    return nil
}

func (ap Alipay) GetName() string {
    return "Alipay"
}

// Order
type Order struct {
    ID            string
    Amount        float64
    PaymentMethod PaymentMethod
}

func NewOrder(id string, amount float64) *Order {
    return &Order{
        ID:     id,
        Amount: amount,
    }
}

func (o *Order) SetPaymentMethod(pm PaymentMethod) {
    o.PaymentMethod = pm
    fmt.Printf("Payment method set to: %s\n", pm.GetName())
}

func (o *Order) ProcessPayment() error {
    if o.PaymentMethod == nil {
        return errors.New("no payment method set")
    }
    
    fmt.Printf("\nProcessing order %s (Amount: %.2f)\n", o.ID, o.Amount)
    err := o.PaymentMethod.Pay(o.Amount)
    if err != nil {
        fmt.Printf("Payment failed: %v\n", err)
        return err
    }
    fmt.Println("Payment successful!")
    return nil
}

func main() {
    // Create payment methods
    creditCard := CreditCard{
        CardNumber: "1234567890123456",
        CVV:        "123",
        Balance:    1000.0,
    }

    paypal := PayPal{
        Email:   "user@example.com",
        Balance: 500.0,
    }

    alipay := Alipay{
        UserID:  "user123",
        Balance: 200.0,
    }

    // Create orders
    order1 := NewOrder("ORD001", 150.0)
    order1.SetPaymentMethod(creditCard)
    order1.ProcessPayment()

    order2 := NewOrder("ORD002", 300.0)
    order2.SetPaymentMethod(paypal)
    order2.ProcessPayment()

    order3 := NewOrder("ORD003", 100.0)
    order3.SetPaymentMethod(alipay)
    order3.ProcessPayment()

    // Test insufficient balance
    order4 := NewOrder("ORD004", 1000.0)
    order4.SetPaymentMethod(alipay)
    order4.ProcessPayment()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '解答4',
  section: '0'
};
