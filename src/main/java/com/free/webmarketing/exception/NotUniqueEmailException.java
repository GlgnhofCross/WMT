package com.free.webmarketing.exception;

public class NotUniqueEmailException extends Exception {

	private static final long serialVersionUID = 1L;

	public NotUniqueEmailException() {
	}

	public NotUniqueEmailException(String e) {
		super(e);
		System.out.println(e);
	}

}
