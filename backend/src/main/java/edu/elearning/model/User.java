package edu.elearning.model;

import java.util.ArrayList;
import java.util.Collection;

import javax.validation.constraints.NotNull;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Document(collection="users")
public class User extends BaseModel implements UserDetails{

	private static final long serialVersionUID = 1L;
	
	@Field
	@NotNull(message = "username_empty")
	@Indexed(unique = true)
	private String username;
	
	@Field
	@NotNull(message = "password_empty")
	@Indexed(unique = true)
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	@Field
	private String role;
	
	@Field
	private String firstName;
	
	@Field
	private String lastName;
	
	@Field
	@NotNull(message = "email_empty")
	private String email;
	
	@Field
	private boolean enabled = false;
	
	@Field
	private boolean accountNonLocked = true;
	
	@Field
	private boolean accountNonExpired = true;

	public User() {

	}

	public User(String username, String password, String firstName, String lastName, String email) {
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(role));
		return authorities;
	}

	public String toString() {
		return "User [id=" + this.getIdKey() + ", username=" + username + ", password=" + password + ", role=" + role + ",]";
	}

	public String getPassword() {
		return password;
	}

	public String getUsername() {
		return username;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public void setAccountNonLocked(boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}

	public void setAccountNonExpired(boolean accountNonExpired) {
		this.accountNonExpired = accountNonExpired;
	}
	
	public boolean isEnabled() {
		return enabled;
	}

	public boolean isCredentialsNonExpired() {
		return true;
	}

	public boolean isAccountNonLocked() {
		return accountNonLocked;
	}

	public boolean isAccountNonExpired() {
		return accountNonExpired;
	}
	
}
