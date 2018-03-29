/* package edu.elearning.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import edu.elearning.service.AppUserDetailsService;

@Configurable
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private AppUserDetailsService appUserDetailsService;

	private String[] whitlist = {};

	// This method is for overriding the default AuthenticationManagerBuilder.
	// We can specify how the user details are kept in the application.
	// It may be in a database, LDAP or in memory.
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(appUserDetailsService);
	}

	// This method is for overriding some configuration of the WebSecurity
	// If you want to ignore some request or request patterns then you can
	// specify that inside this method
	@Override
	public void configure(WebSecurity web) throws Exception {
		super.configure(web);
	}

	// This method is used for override HttpSecurity of the web Application.
	// We can specify our authorization criteria inside this method.
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println("this is executed  add ******************************** Alabbas");
		http
				// starts authorizing configurations
				.authorizeRequests()
				// ignoring the guest's URLs
				.antMatchers(
						"/",
						"/favicon.ico",
						"/resources/**",
						"/home",
						"/api/account/register",
						"/api/account/login",
						"/api/logout"
				).permitAll()

				// authenticate all remaining URLS
				.anyRequest().authenticated().and()

				//.formLogin().loginPage("/").permitAll().and()
				/*
				 * "/logout" will log the user out by invalidating the HTTP Session, cleaning up
				 * any {link rememberMe()} authentication that was configured,
				 *
				.logout().permitAll().logoutRequestMatcher(new AntPathRequestMatcher("/api/logout", "POST")).and()
				// enabling the basic authentication
				.httpBasic().and()
				// configuring the session on the server
				.sessionManagement().sessionCreationPolicy(
						SessionCreationPolicy.IF_REQUIRED
				).and()
				// disabling the CSRF - Cross Site Request Forgery
				.csrf().disable();
	}
}

*/