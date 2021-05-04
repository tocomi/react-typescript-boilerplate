import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RegisterForm } from './RegisterForm';

describe('登録フォームのテスト', () => {
  test('正常にフォームの送信ができる', () => {
    const { unmount } = render(<RegisterForm />);

    fireEvent.change(screen.getByTestId('email'), { target: { value: 'hoge@fuga.com' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'hogefuga' } });

    fireEvent.click(screen.getByTestId('submitButton'));

    // 入力が正しいのでエラーメッセージは表示されない
    expect(screen.queryByTestId('emailErrorMessage')).toBeFalsy();
    expect(screen.queryByTestId('passwordErrorMessage')).toBeFalsy();

    unmount();
  });

  test('メールアドレスが空の場合はエラーになる', async () => {
    const { unmount } = render(<RegisterForm />);

    fireEvent.change(screen.getByTestId('password'), { target: { value: 'hogefuga' } });

    fireEvent.click(screen.getByTestId('submitButton'));

    await screen.findByTestId('emailErrorMessage');

    // メールアドレスのエラーのみ表示される
    expect(screen.queryByTestId('emailErrorMessage')).toBeTruthy();
    expect(screen.queryByTestId('passwordErrorMessage')).toBeFalsy();

    unmount();
  });

  test('パスワードの文字数が満たない場合はエラーになる', async () => {
    const { unmount } = render(<RegisterForm />);

    fireEvent.change(screen.getByTestId('email'), { target: { value: 'hoge@fuga.com' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: '1234567' } });

    fireEvent.click(screen.getByTestId('submitButton'));

    await screen.findByTestId('passwordErrorMessage');

    // パスワードの文字数が足りないためエラーが表示される
    expect(screen.queryByTestId('emailErrorMessage')).toBeFalsy();
    expect(screen.queryByTestId('passwordErrorMessage')).toBeTruthy();

    unmount();
  });

  test('メールアドレスとパスワードがどちらもからの場合は両方のエラーが表示される', async () => {
    const { unmount } = render(<RegisterForm />);

    fireEvent.click(screen.getByTestId('submitButton'));

    await screen.findByTestId('emailErrorMessage');

    // どちらのエラーメッセージも表示される
    expect(screen.queryByTestId('emailErrorMessage')).toBeTruthy();
    expect(screen.queryByTestId('passwordErrorMessage')).toBeTruthy();

    unmount();
  });
});
