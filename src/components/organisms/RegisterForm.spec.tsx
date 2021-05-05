import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { RegisterForm } from './RegisterForm';

describe('登録フォームのテスト', () => {
  test('正常にフォームの送信ができる', () => {
    const { unmount } = render(<RegisterForm />);

    userEvent.type(screen.getByRole('textbox', { name: 'email' }), 'hoge@fuga.com');
    userEvent.type(screen.getByLabelText('password'), 'hogefuga');

    userEvent.click(screen.getByRole('button', { name: 'Register' }));

    // 入力が正しいのでエラーメッセージは表示されない
    expect(screen.queryByText('Email is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Password is required.')).not.toBeInTheDocument();

    unmount();
  });

  test('メールアドレスが空の場合はエラーになる', async () => {
    const { unmount } = render(<RegisterForm />);

    userEvent.type(screen.getByLabelText('password'), 'hogefuga');

    userEvent.click(screen.getByRole('button', { name: 'Register' }));

    // メールアドレスのエラーのみ表示される
    expect(await screen.findByText('Email is required.')).toBeInTheDocument();
    expect(screen.queryByText('Password is required.')).not.toBeInTheDocument();

    unmount();
  });

  test('パスワードの文字数が満たない場合はエラーになる', async () => {
    const { unmount } = render(<RegisterForm />);

    userEvent.type(screen.getByRole('textbox', { name: 'email' }), 'hoge@fuga.com');
    userEvent.type(screen.getByLabelText('password'), '1234567');

    userEvent.click(screen.getByRole('button', { name: 'Register' }));

    // パスワードの文字数が足りないためエラーが表示される
    expect(await screen.findByText('Password needs 8 characters at least.')).toBeInTheDocument();
    expect(screen.queryByText('Email is required.')).not.toBeInTheDocument();

    unmount();
  });

  test('メールアドレスとパスワードがどちらもからの場合は両方のエラーが表示される', async () => {
    const { unmount } = render(<RegisterForm />);

    userEvent.click(screen.getByRole('button', { name: 'Register' }));

    // どちらのエラーメッセージも表示される
    expect(await screen.findByText('Email is required.')).toBeInTheDocument();
    expect(await screen.findByText('Password is required.')).toBeInTheDocument();

    unmount();
  });
});
